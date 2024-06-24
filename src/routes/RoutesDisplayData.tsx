interface RouteDisplayData {
    label: string;
}

const RouteLabels: Map<string, RouteDisplayData> = new Map<string, RouteDisplayData>([
    ["/", {label: "home"}],
    ["/resume", {label: "resume"}],
    ["/games", {label: "games"}],
    ["/games/gunarmed", {label: "gunarmed"}],
    ["/games/automagical", {label: "Automagical"}],
    ["/games/scoober-splat", {label: "Scoober Splat"}],
    ["/tools", {label: "tools"}],
    ["/contact", {label: "contact"}],
]);

export default function GetRouteDisplayData(path: string): RouteDisplayData {
    if (RouteLabels.has(path)) {
        const routeDisplayData = RouteLabels.get(path);
        
        if (routeDisplayData !== undefined) {
            return routeDisplayData;
        }
    }
    
    console.error(`Missing display data for path '${path}'`)
    
    return {
        label: "MISSING LABEL",
    };
}