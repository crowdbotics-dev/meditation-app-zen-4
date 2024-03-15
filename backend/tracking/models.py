from django.conf import settings
from django.db import models


class Progress(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="progress_user",
    )
    session_completed = models.IntegerField(
        default="0",
    )
    plan_completed = models.IntegerField(
        default="0",
    )
    last_session_date = models.DateField(
        null=True,
        blank=True,
    )


# Create your models here.
