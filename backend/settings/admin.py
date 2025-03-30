from django.contrib import admin
from .models import Settings

@admin.register(Settings)
class SettingsAdmin(admin.ModelAdmin):
    list_display = ['min_booking_length', 'max_booking_length', 'max_guests_per_booking', 'breakfast_price']
    
    def has_add_permission(self, request):
        return not Settings.objects.exists()