import { NgModule } from "@angular/core";
import { MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule, 
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatPaginatorModule
    
} from '@angular/material';

@NgModule({
    imports:[ MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule, 
        MatToolbarModule,
        MatExpansionModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatPaginatorModule
        ],
    exports:[MatFormFieldModule, 
        MatInputModule, 
        MatCardModule, 
        MatIconModule, 
        MatToolbarModule,
        MatExpansionModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatPaginatorModule
        

        



        
    ]

})
export class MaterialModule{

}