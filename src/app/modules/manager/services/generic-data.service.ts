import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, EMPTY, Observable, switchMap, of } from "rxjs";

@Injectable()
export class GenericDataService<DataType> {
  protected m_DataSubject: BehaviorSubject<DataType[]> = new BehaviorSubject<DataType[]>([]);
  public m_Data$: Observable<DataType[]> = this.m_DataSubject.asObservable();

  protected m_ErrorSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public m_Error$: Observable<string | null> = this.m_ErrorSubject.asObservable().pipe(
    switchMap(err => err ? of(err) : EMPTY)
  );

  set setData(data: DataType[]) {
    this.m_DataSubject.next(data);
  }
  clearData(): void {
    this.m_DataSubject.next([]);
  }

  set setError(error: string | null) {
    this.m_ErrorSubject.next(error);
  }
  clearError(): void {
    this.m_ErrorSubject.next(null);
  }

  resetData(): void {
    this.clearData();
    this.clearError();
  }

  protected addErrorHandler(obs: Observable<any>) {
    return obs.pipe(
      catchError(res => {
        console.log(res);
        const error = res.error;
        if (error && error.message) {
          this.setError = error.message;
        }
        return EMPTY;
      })
    );
  }
}