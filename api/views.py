from django.shortcuts import render, HttpResponse
from .models import Article
from rest_framework.views import APIView
from .serializers import ArticleSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins
from rest_framework import status


# Create your views here.


class ArticleListView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class ArticleDetailView(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    lookup_field = 'id'
    lookup_url_kwarg = 'id'  # Add this line

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

    # def get(self, request, pk):
    #     try:
    #         article = Article.objects.get(pk=pk)
    #     except Article.DoesNotExist:
    #         return Response(status.HTTP_400_BAD_REQUEST)
    #
    #     serializer = ArticleSerializer(article)
    #     return Response(serializer.data, status.HTTP_200_OK)
    #
    # def put(self, request, pk):
    #     try:
    #         article = Article.objects.get(pk=pk)
    #     except Article.DoesNotExist:
    #         return Response(status.HTTP_404_NOT_FOUND)
    #     serializer = ArticleSerializer(article, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status.HTTP_200_OK)
    #     return Response(serializer.data, status.HTTP_400_BAD_REQUEST)
    #
    # def delete(self, request, pk):
    #     try:
    #         article = Article.objects.get(pk=pk)
    #         article.delete()
    #     except Article.DoesNotExist:
    #         return Response(status.HTTP_404_NOT_FOUND)
