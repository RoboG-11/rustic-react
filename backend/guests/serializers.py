from rest_framework import serializers
from .models import Guest

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = [
            'id',
            'full_name',
            'email',
            'national_id',
            'nationality',
            'country_flag',
            'created_at'
        ]