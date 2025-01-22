import os
import shutil
import subprocess
import logging
from datetime import datetime

# Configuração do sistema de logging
def setup_logging(script_dir):
    log_dir = os.path.join(script_dir, 'log')
    os.makedirs(log_dir, exist_ok=True)
    
    # Nome do arquivo com timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    log_filename = f"deploy_{timestamp}.log"
    log_path = os.path.join(log_dir, log_filename)
    
    # Configuração do logging com UTF-8
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_path, encoding='utf-8'),  # Corrigido aqui
            logging.StreamHandler()
        ]
    )
    return log_path

def build_and_deploy():
    logger = logging.getLogger(__name__)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    log_path = setup_logging(script_dir)
    
    try:
        logger.info("="*50)
        logger.info("Iniciando processo de build e deploy")
        logger.info(f"Logs serão salvos em: {log_path}")

        # 1. Caminhos base
        root_dir = os.path.dirname(script_dir)
        
        # 2. Caminhos das pastas
        webapp_client_path = os.path.join(root_dir, 'webapp-client')
        back_end_path = os.path.join(root_dir, 'webapp-server')
        
        # Verificação de pastas
        logger.info("Verificando estrutura de pastas...")
        if not os.path.exists(webapp_client_path):
            raise FileNotFoundError(f"Pasta webapp-client não encontrada em: {webapp_client_path}")
            
        if not os.path.exists(back_end_path):
            raise FileNotFoundError(f"Pasta back-end não encontrada em: {back_end_path}")

        # 3. Build do webapp-client
        logger.info("Iniciando build do webapp-client...")
        logger.debug("Executando pnpm install")
        subprocess.run(['pnpm', 'install'], cwd=webapp_client_path, check=True, shell=True)
        
        logger.debug("Executando pnpm run build")
        subprocess.run(['pnpm', 'run', 'build'], cwd=webapp_client_path, check=True, shell=True)
        logger.info("Build do front-end concluído com sucesso")

        # 4. Caminhos de origem e destino
        build_source = os.path.join(webapp_client_path, 'dist')
        build_dest = os.path.join(back_end_path, 'build')
        
        # 5. Limpeza da build anterior
        if os.path.exists(build_dest):
            logger.info("Removendo build anterior...")
            shutil.rmtree(build_dest)
            logger.debug(f"Pasta removida: {build_dest}")

        # 6. Cópia da nova build
        logger.info("Copiando nova build...")
        shutil.copytree(build_source, build_dest)
        logger.info(f"Build copiado para: {build_dest}")
        logger.info("Processo concluído com sucesso!")

    except subprocess.CalledProcessError as e:
        logger.error(f"Erro durante execução de comando: {str(e)}")
        raise
    except Exception as e:
        logger.exception(f"Erro crítico durante o processo: {str(e)}")
        raise
    finally:
        logger.info("="*50 + "\n")

if __name__ == "__main__":
    try:
        build_and_deploy()
    except Exception:
        input("Pressione Enter para sair...")