import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TableComponent } from './table.component';
import { HttpService } from 'src/libs/services/http.service';

describe('TableComponentComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table', () => {
    const compiled = fixture.nativeElement;
    const table = compiled.querySelectorAll('table');
    expect(table).toBeDefined();
  });

  it('should display 6 table headers', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('th');
    expect(rows.length).toBe(6);
  });

  it('should call deleteElement method when Alle Löschen button is clicked', () => {
    spyOn(component, 'deleteAll');
    const deleteButton =
      fixture.debugElement.nativeElement.querySelector('#deleteAll');
    deleteButton.click();
    expect(component.deleteAll).toHaveBeenCalled();
  });
});

describe('HttpServiceForTableData', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });

    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch data successfully and only be called once', (done) => {
    const mockData = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];

    service.getTableData().subscribe((data) => {
      expect(data).toBeDefined();
      expect(data.length).toBe(1);
      expect(data).toEqual(mockData);
      done();
    });

    const requests = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );

    requests.flush(mockData);
  });
});
