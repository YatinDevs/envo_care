<?php

namespace App\Filament\Resources\OurClientSectionResource\Pages;

use App\Filament\Resources\OurClientSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditOurClientSection extends EditRecord
{
    protected static string $resource = OurClientSectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
