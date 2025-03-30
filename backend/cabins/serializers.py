from rest_framework import serializers
from .models import Cabin

class CabinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cabin
        fields = ['id', 'name', 'max_capacity', 'regular_price', 'discount', 'description', 'image', 'created_at']