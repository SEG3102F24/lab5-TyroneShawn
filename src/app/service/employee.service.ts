// src/app/service/employee.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  CollectionReference,
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees$: Observable<readonly Employee[]>;

  get $(): Observable<readonly Employee[]> {
    return this.employees$;
  }

  private employeesCollection: CollectionReference<Employee>;

  constructor(private firestore: Firestore) {
    // Define the Firestore Data Converter
    const employeeConverter: FirestoreDataConverter<Employee> = {
      toFirestore(employee: Employee): DocumentData {
        // Exclude the 'id' field when saving to Firestore
        const { id, ...data } = employee;
        return data;
      },
      fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
      ): Employee {
        const data = snapshot.data(options)!;
        return {
          id: snapshot.id,
          ...data,
        } as Employee;
      },
    };

    // Create a reference to the 'employees' collection with the converter
    this.employeesCollection = collection(this.firestore, 'employees').withConverter(employeeConverter);

    // Fetch data as Observable<readonly Employee[]>
    this.employees$ = collectionData(this.employeesCollection);
  }

  addEmployee(employee: Employee): boolean {
    addDoc(this.employeesCollection, employee)
      .then(() => {
        console.log('Employee added successfully');
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
    return true; // Return type remains the same
  }
}
