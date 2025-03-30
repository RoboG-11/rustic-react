from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            'id',
            'cabin',
            'guest',
            'start_date',
            'end_date',
            'num_nights',
            'num_guests',
            'total_price',
            'status',
            'has_breakfast',
            'observations',
            'created_at'
        ]