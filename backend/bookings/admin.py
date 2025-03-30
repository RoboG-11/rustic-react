from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['guest', 'cabin', 'start_date', 'end_date', 'status', 'total_price']
    list_filter = ['status', 'has_breakfast', 'created_at']
    search_fields = ['guest__full_name', 'cabin__name']