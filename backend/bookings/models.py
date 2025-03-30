from django.db import models
from cabins.models import Cabin
from guests.models import Guest

class Booking(models.Model):
    cabin = models.ForeignKey('cabins.Cabin', on_delete=models.CASCADE)
    guest = models.ForeignKey('guests.Guest', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    num_nights = models.IntegerField()
    num_guests = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=[
            ('unconfirmed', 'Unconfirmed'),
            ('confirmed', 'Confirmed'),
            ('checked-in', 'Checked In'),
            ('checked-out', 'Checked Out')
        ],
        default='unconfirmed'
    )
    has_breakfast = models.BooleanField(default=False)
    observations = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)