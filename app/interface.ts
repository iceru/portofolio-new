export interface StackType {
    id: number
    code: string
    name: string
    image: string
}

export interface ProjectType {
    id: number
    name: string
    description?: string
    status: string
    stacks: StackType[]
    images: ImageType[]
    url: string
    created_at: string
}

export interface ImageType {
    id: number
    filename?: string
    path: string
    project_id: number
}
