import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../types/book';
import { Category } from '../../../types/category';
import { AppService } from '../../../app.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  moduleId: __moduleName,
  selector: 'bookstore',
  templateUrl: 'bookstore.template.html',
  providers: [AppService]
})
export class BookStoreComponent {
  categories: Category[];
  navClosed: boolean = true;
  @Output() appTitleChanged = new EventEmitter();


  constructor(private appServie: AppService, private route: ActivatedRoute) { }

  public ngOnInit() {

        this.route.params
          .subscribe((params) => console.log(params));


    // Get the categories
    this.appServie.getCategories()
      .then(categories => {
        this.categories = categories;
      /*  this.route.firstChild.params
          .switchMap((params: Params) => {

            
            params['category'];
          })
          .subscribe((category: string) => this.changeCategory(category));*/
      });
  }

  getBookDetail(): void {
    console.log('Will be implemented in the next section');
  }

  changeCategory(selectedCategory: Category): void {
    this.categories = this.categories.map(category => {
      category.selected = category.name === selectedCategory.name;
      return category;
    });
  }


  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase();
    this.books = this.initialData.books.filter(book => {
      return book.title.toLowerCase().includes(searchTerm) ||
        book.category.toLocaleLowerCase().includes(searchTerm);
    });
  }

  toggleSidebar(open: boolean): void {
    this.navClosed = open;
  }
}