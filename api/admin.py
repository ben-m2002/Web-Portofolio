from django.contrib import admin
from .models import Article


# Register your models here.

# admin.site.register(Article) # we can use this way for basic registration

# we can use this way for more advanced admin models
@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')  # creates a filter
    list_display = ("title", 'description')