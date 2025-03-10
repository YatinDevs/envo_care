<?php

namespace App\Filament\Resources\SettingSectionResource\Pages;

use App\Filament\Resources\SettingSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSettingSections extends ListRecords
{
    protected static string $resource = SettingSectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
