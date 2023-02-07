import { Pensamento } from './pensamento/pensamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean) {

    const itensPorPagina = 6;
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    //codigo para fazer a procura no search, se não tiver nada não faz
    if (filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }

    if(favoritos) {
      params = params.set("favorito", true)
    }

    //não é correto concatenar os valores na url, a menaeira corretaé fazer como o parans acima
    //return this.http.get<Pensamento[]>(`${this.API}?_page${pagina}&_limit=?${itensPorPagina}`)
    return this.http.get<Pensamento[]>(this.API, { params })

  }

   //listarPensamentoFavoritos(pagina: number, filtro: string): Observable<Pensamento[]> {
   // const itensPorPagina = 6;

   // let params = new HttpParams()
   // .set("_page", pagina)
    //.set("_limit", itensPorPagina)
    //.set("favorito", true)
   // if(filtro.trim().length > 2 ) {
   //   params = params.set("q", filtro)
   // }

 //   return this.http.get<Pensamento[]>(this.API, { params })
 //  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento)
  }


  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

}
