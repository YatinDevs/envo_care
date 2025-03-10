<?php

namespace App\Filament\Resources\SettingSectionResource\Pages;

use App\Filament\Resources\SettingSectionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSettingSection extends EditRecord
{
    protected static string $resource = SettingSectionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
