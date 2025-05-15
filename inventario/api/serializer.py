from .models import Productos
from rest_framework import serializers
from django.core.exceptions import ValidationError as DjangoValidationError

class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'
    
    # validacion del nombre que no este vacio y que tenga al menos 3 caracteres
    def validate_nombre(self, value):
        if not value.strip():
            raise serializers.ValidationError("El nombre no puede estar vacío")
        if len(value) < 3:
            raise serializers.ValidationError("El nombre debe tener al menos 3 caracteres")
        return value.strip()
    
    # validacion del precio que no sea negativo
    def validate_precio(self, value):
        if value < 0:
            raise serializers.ValidationError("El precio no puede ser negativo")
        return value
