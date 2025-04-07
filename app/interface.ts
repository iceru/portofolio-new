export interface StackType {
    id: number
    name: string
    image?: string
}

export interface ProjectType {
    id: number
    name: string
    description?: string
    status: string
    stacks: StackType[]
}
