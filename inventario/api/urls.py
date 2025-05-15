from django.urls import path
from .views import ProductosListCreateView, ProductosDetailView

urlpatterns = [
    path('productos/', ProductosListCreateView.as_view(), name='productos-list-create'),
    path('productos/<int:pk>/', ProductosDetailView.as_view(), name='productos-detail'),
]