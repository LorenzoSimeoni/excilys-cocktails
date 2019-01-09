import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { StrToArrayPipe } from '../shared/pipes/str-to-array.pipe';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './routed/recipe-create/recipe-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './routed/recipe-update/recipe-update.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    StrToArrayPipe,
    RecipeOverviewComponent,
    RecipeCreateComponent,
    RecipeUpdateComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ]
})
export class RecipeModule {}
