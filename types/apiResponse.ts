export interface ApiResponse<T> {
    status: string;
    code: string;
    results: number;
    data: T;
    pagination: {
        currentPage: number;
        totalPages: number;
        limitPerPage: number;
        totalCount: number;
    };
}