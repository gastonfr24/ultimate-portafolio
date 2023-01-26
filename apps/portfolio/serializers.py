from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'status',
        ]

class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        category = Category
        fields = [
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'views',
            'category',
        ]


# class PostDashSerializer(serializers.ModelSerializer):
#     category = serializers.SlugRelatedField(queryset=Category.objects.all(), slug_field='slug')
#     class Meta:
#         model = Post
#         fields = [
#             'id',
#             'title',
#             'thumbnail',
#             'slug',
#             'views',
#             'category',
#             'status'
#         ]