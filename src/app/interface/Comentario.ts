export interface Comentario{
    id?:number;  // el '?' hace que no sea requerido y cuando llamemos la interfacem no será obligación declararlo
    title: string;
    creator: string;
    text: string;
    created: Date;
}