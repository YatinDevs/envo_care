<?php

namespace App\Filament\Resources\BlogSectionResource\Pages;

use App\Filament\Resources\BlogSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBlogSection extends EditRecord
{
    protected static string $resource = BlogSectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
