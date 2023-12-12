interface Entregable {
    entregar(): void;
    devolver(): void;
    isEntregado(): boolean;
    compareTo(obj: Entregable): number;
}
export default Entregable;