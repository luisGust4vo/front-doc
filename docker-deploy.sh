#!/bin/bash

echo "🐳 Construindo e executando TailAdmin em container..."

# Build da imagem
docker-compose build

# Executar o container
docker-compose up -d

echo "✅ TailAdmin está rodando em http://localhost:3001"
echo "📊 Para ver os logs: docker-compose logs -f"
echo "🛑 Para parar: docker-compose down"