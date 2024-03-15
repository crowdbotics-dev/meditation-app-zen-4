# Generated by Django 3.2.24 on 2024-03-15 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SleepContent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=50)),
                ('audio_file', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]