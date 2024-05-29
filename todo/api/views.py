from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, TodoSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Todo

# Todo Create
class TodoListCreate(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user 
        return Todo.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author = self.request.user)
        else:
            print(serializer.error)

class TodoDelete(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)

class TodoUpdate(generics.UpdateAPIView):
    queryset =Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(author=user)
    

# Create user
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]