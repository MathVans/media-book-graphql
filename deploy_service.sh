AWS_REGION="us-east-1"
AWS_ACCOUNT_ID="xxxxxxx"
REPO_NAME="dev/media-book-api"
CLUSTER_NAME="media-book_api"  # Nome do cluster que você criou
SERVICE_NAME="media_book_api"  # Nome do serviço que você criou
IMAGE_TAG="latest"

ECR_URL="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
FULL_IMAGE_URL="${ECR_URL}/${REPO_NAME}:${IMAGE_TAG}"

echo "🚀 Iniciando deploy para o ECS..."

# 1. Login no ECR
echo "🔑 Fazendo login no Amazon ECR..."
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_URL}

if [ $? -ne 0 ]; then
    echo "❌ Falha no login da AWS. Verifique suas credenciais."
    exit 1
fi


# 2. Build da imagem
echo "📦 Buildando a imagem Docker..."
docker build -t ${REPO_NAME} .

# 3. Tagging
echo "🏷️  Aplicando tag na imagem..."
docker tag ${REPO_NAME}:latest ${FULL_IMAGE_URL}

# 4. Push para o ECR
echo "☁️  Enviando imagem para o ECR..."
docker push ${FULL_IMAGE_URL}


# 5. Forçar deploy no ECS
echo "♻️  Atualizando o serviço no ECS para usar a nova imagem..."
aws ecs update-service --cluster ${CLUSTER_NAME} \
                       --service ${SERVICE_NAME} \
                       --force-new-deployment \
                       --region ${AWS_REGION}


echo "✅ Deploy finalizado! O ECS está iniciando a nova Task."
echo "Acompanhe o status no console: https://${AWS_REGION}.console.aws.amazon.com/ecs/v2/clusters/${CLUSTER_NAME}/services/${SERVICE_NAME}/health"