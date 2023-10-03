import '@testing-library/jest-dom';
import {act, queryByAttribute, render} from "@testing-library/react";
import App from "@app/root";

describe("Test cases for /index.tsx", () => {

    it("Should render an Div with id App", async () => {
        try {
            const result = await act(() => {
                return render(<App/>);
            });
            const elem = await queryByAttribute('class', result.container, /app-wrapper/, {exact: true});
            expect(elem).toBeInTheDocument();
        } catch (error) {
            throw new Error("Test Failed")
        }

    })
});