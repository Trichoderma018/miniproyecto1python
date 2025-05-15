from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Productos
from .serializer import ProductosSerializer

class ProductosListCreateView(ListCreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer

class ProductosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer