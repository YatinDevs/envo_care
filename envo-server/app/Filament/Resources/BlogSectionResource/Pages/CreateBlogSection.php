<?php

namespace App\Filament\Resources\BlogSectionResource\Pages;

use App\Filament\Resources\BlogSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateBlogSection extends CreateRecord
{
    protected static string $resource = BlogSectionResource::class;
}
