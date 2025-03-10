<?php

namespace App\Filament\Resources\BlogSectionResource\Pages;

use App\Filament\Resources\BlogSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBlogSections extends ListRecords
{
    protected static string $resource = BlogSectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
