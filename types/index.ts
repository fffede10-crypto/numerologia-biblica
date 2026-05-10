export interface ReferenciaBiblica {
  cita: string
  libro: string
  contexto: string
}

export interface VersiculoAncla {
  cita: string
  texto: string
}

export interface NumeroBiblico {
  id: number
  numero: number
  titulo: string
  significado_principal: string
  palabra_hebrea: string | null
  palabra_griega: string | null
  valor_numerico_hebreo: string | null
  referencias: ReferenciaBiblica[]
  aplicacion_devocional: string | null
  versiculo_ancla: VersiculoAncla
  oracion_sugerida: string | null
  color_simbolico: string | null
  nivel_profundidad: string | null
  created_at: string
}

export interface Usuario {
  id: string
  email: string
  password_hash: string
  nombre: string | null
  fecha_nacimiento: string | null
  shopify_order_id: string | null
  acceso_activo: boolean
  created_at: string
  area_orientacion: string | null
  etapa_vida: string | null
  intencion_actual: string | null
  vio_bienvenida: boolean
}

export interface PerfilNumerologico {
  id: string
  usuario_id: string
  numero_destino: number | null
  numero_alma: number | null
  numero_personalidad: number | null
  numero_expresion: number | null
  nombre_completo: string | null
  fecha_nacimiento: string | null
  calculado_at: string
}

export interface Favorito {
  id: string
  usuario_id: string
  numero_id: number
  created_at: string
}

export interface DevocionalCompletado {
  id: string
  usuario_id: string
  numero_id: number
  fecha: string
}

export interface ResetToken {
  id: string
  usuario_id: string
  token: string
  expires_at: string
  used: boolean
  created_at: string
}

export type RelacionEntorno =
  | 'pareja' | 'hijo' | 'hija' | 'padre' | 'madre'
  | 'hermano' | 'hermana' | 'jefe' | 'amigo' | 'amiga' | 'otro'

export interface EntornoPerfil {
  id: number
  usuario_id: string
  nombre: string
  fecha_nacimiento: string
  relacion: RelacionEntorno
  relacion_custom: string | null
  numero_destino: number | null
  numero_expresion: number | null
  numero_alma: number | null
  numero_personalidad: number | null
  notas: string | null
  created_at: string
}

export interface JWTPayload {
  sub: string       // usuario_id
  email: string
  iat: number
  exp: number
}

export interface PerfilNumerologicoCalculado {
  numeroDestino: number
  numeroExpresion: number
  numeroAlma: number
  numeroPersonalidad: number
}
