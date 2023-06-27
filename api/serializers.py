from rest_framework import serializers
from .models import Article
from .models import Project
from django.contrib.auth.models import User
from django.http import JsonResponse
import requests

# normal django way to serialize
# class ArticleSerializer(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     description = serializers.CharField(max_length=400)
#
#     def create (self, validated_data):
#         return Article.objects.create(validated_data)
#
#     def update(self, instance, validated_data):
#         instance.title = validated_data.get("title", instance.title)
#         instance.description = validated_data.get("description", instance.description)

# serialize with Model Serializer
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ["id", "title", "description"]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["id", "title", "description", "image", "date"]

class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {
            'password' : {
                'write_only' : True,
                'required' : True
            }
        }
    def create (self, validated_data):
        user = User.objects.create_user(**validated_data)
        data = {
            'username' : validated_data.get("username"),
            'password' : validated_data.get("password")
        }
        response = requests.post("http://localhost:8000/API/token", json = data)
        if response.ok:
            json_data = response.json()
            access = json_data.get("access")
            refresh = json_data.get("refresh")
            response_toClient = JsonResponse({'user_id' : user.id})
            response_toClient.set_cookie("access", access, max_age = 300, secure = False, httponly = True)
            response_toClient.set_cookie("refresh", refresh, max_age = 86400, secure = False, httponly = True)
        return user

