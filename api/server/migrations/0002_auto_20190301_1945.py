# Generated by Django 2.1.7 on 2019-03-01 19:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='moviereview',
            old_name='movieID',
            new_name='id',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='userID',
            new_name='id',
        ),
    ]