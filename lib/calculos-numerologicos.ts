import { PerfilNumerologicoCalculado } from '@/types'

const VALORES_LETRAS: Record<string, number> = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, ñ: 6, o: 7, p: 8, q: 9,
  r: 1, s: 2, t: 3, u: 4, v: 5, w: 6, x: 7, y: 8, z: 9,
}

const VOCALES = new Set(['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'])

const NUMEROS_MAESTROS = new Set([11, 22, 33])

// Normaliza letra: quita tildes manteniendo ñ
function normalizarLetra(letra: string): string {
  const conTilde: Record<string, string> = {
    á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
  }
  return conTilde[letra] ?? letra
}

function reducir(n: number): number {
  if (n <= 9 || NUMEROS_MAESTROS.has(n)) return n
  const suma = String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
  return reducir(suma)
}

function valorLetra(letra: string): number {
  // Preservar ñ antes de normalizar
  const clave = letra === 'ñ' ? 'ñ' : normalizarLetra(letra)
  return VALORES_LETRAS[clave] ?? 0
}

function esVocal(letra: string): boolean {
  return VOCALES.has(letra)
}

function esConsonante(letra: string): boolean {
  const normalizada = letra === 'ñ' ? 'ñ' : normalizarLetra(letra)
  return !esVocal(letra) && VALORES_LETRAS[normalizada] !== undefined
}

function limpiarNombre(nombre: string): string[] {
  return nombre
    .toLowerCase()
    .split('')
    .filter((c) => /[a-záéíóúñ]/.test(c))
}

export function calcularNumeroDestino(fechaNacimiento: string): number {
  // Acepta YYYY-MM-DD o YYYYMMDD
  const soloDigitos = fechaNacimiento.replace(/\D/g, '')
  const suma = soloDigitos
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
  return reducir(suma)
}

export function calcularNumeroExpresion(nombreCompleto: string): number {
  const letras = limpiarNombre(nombreCompleto)
  const suma = letras.reduce((acc, l) => acc + valorLetra(l), 0)
  return reducir(suma)
}

export function calcularNumeroAlma(nombreCompleto: string): number {
  const letras = limpiarNombre(nombreCompleto).filter(esVocal)
  const suma = letras.reduce((acc, l) => acc + valorLetra(l), 0)
  return reducir(suma)
}

export function calcularNumeroPersonalidad(nombreCompleto: string): number {
  const letras = limpiarNombre(nombreCompleto).filter(esConsonante)
  const suma = letras.reduce((acc, l) => acc + valorLetra(l), 0)
  return reducir(suma)
}

export function calcularPerfilNumerologico(
  nombre: string,
  fecha: string
): PerfilNumerologicoCalculado {
  return {
    numeroDestino: calcularNumeroDestino(fecha),
    numeroExpresion: calcularNumeroExpresion(nombre),
    numeroAlma: calcularNumeroAlma(nombre),
    numeroPersonalidad: calcularNumeroPersonalidad(nombre),
  }
}
