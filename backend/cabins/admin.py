from django.contrib import admin
from .models import Cabin

@admin.register(Cabin)
class CabinAdmin(admin.ModelAdmin):
    list_display = ['name', 'max_capacity', 'regular_price', 'discount', 'created_at']
    list_filter = ['max_capacity', 'created_at']
    search_fields = ['name', 'description']