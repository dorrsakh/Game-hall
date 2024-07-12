import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Screenshot } from "../entities/Screenshot"


const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}`)
    return useQuery({
        queryKey: ["pictures", gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreenshots