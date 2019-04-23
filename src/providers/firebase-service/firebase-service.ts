import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/Storage';

@Injectable()
export class FirebaseServiceProvider {

  constructor(
    public http: HttpClient,
    private db:AngularFireDatabase,
    private afStorage: AngularFireStorage
    ) {
   
  }

  getFiles(){
    let ref = this.db.list('files')

    return ref.snapshotChanges().map((changes)=>{
      return changes.map((c)=>({
        key:c.payload.key,...c.payload.val()
      }))
    })
  }

  upLoadToStorage(information){
    let name = `${new Date().getTime()}.txt`
    
    return this.afStorage.ref(`files/${name}`).putString(information)
  }

  deleteFromStorage(storagePath){
    return this.afStorage.ref(storagePath).delete()
  }

}
