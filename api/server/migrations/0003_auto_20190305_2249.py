# Generated by Django 2.1.7 on 2019-03-05 22:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_auto_20190301_1945'),
    ]

    operations = [
        migrations.AlterField(
            model_name='moviereview',
            name='rating',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
    ]