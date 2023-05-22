from django.shortcuts import render, HttpResponse
from .models import Article
from rest_framework.views import APIView
from .serializers import ArticleSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class ArticleListView(APIView):
    def get(self, request):
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many = True)
        return Response(serializer.data, status.HTTP_200_OK)

    def post(self, request):
        serializer = ArticleSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_201_CREATED)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class ArticleDetailView(APIView):
    def get(self, request, pk):
        try:
            article = Article.objects.get(pk = pk)
        except Article.DoesNotExist:
            return Response(status.HTTP_400_BAD_REQUEST)

        serializer = ArticleSerializer(article)
        return Response(serializer.data, status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            article = Article.objects.get(pk = pk)
        except Article.DoesNotExist:
            return Response(status.HTTP_404_NOT_FOUND)
        serializer = ArticleSerializer(article, data = request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status.HTTP_200_OK)
        return Response(serializer.data, status.HTTP_400_BAD_REQUEST)

    def delete (self, request, pk):
        try:
            article = Article.objects.get(pk = pk)
            article.delete()
        except Article.DoesNotExist:
            return Response(status.HTTP_404_NOT_FOUND)



