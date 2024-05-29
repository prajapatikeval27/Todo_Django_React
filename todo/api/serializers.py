from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Todo

# Todo Serializer
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id","title","description", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}


# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
        
    def create(self, validation_data):
        user = User.objects.create_user(**validation_data)
        return user