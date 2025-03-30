from rest_framework import serializers
from .models import Settings

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = [
            'id',
            'min_booking_length',
            'max_booking_length',
            'max_guests_per_booking',
            'breakfast_price'
        ]