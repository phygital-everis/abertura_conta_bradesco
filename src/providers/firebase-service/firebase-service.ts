import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/Storage';

@Injectable()
export class FirebaseServiceProvider {

  private PATH = 'contacts/';

  constructor(
    public http: HttpClient,
    private db:AngularFireDatabase,
    private afStorage: AngularFireStorage
    ) {
   
  }

  //CRUD das imagens
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

  //CRUD dos clientes
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(contact: any) {
    return new Promise((resolve, reject) => {
      if (contact.key) {
        this.db.list(this.PATH)
          .update(contact.key, { name: contact.name, tel: contact.tel })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ name: contact.name, tel: contact.tel })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}


