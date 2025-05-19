import { render, screen } from "@testing-library/react"
import PlanList from "../plan/PlanList"
import { usePlans } from "../../services/api"

jest.mock("../../services/api", () => ({
  usePlans: jest.fn(),
}))

// Ajustar ruta aquí
jest.mock('../plan/PlanCard', () => ({ plan }) => (
  <div data-testid="plan-card">{plan.name}</div>
));

afterEach(() => {
  jest.clearAllMocks();
});

describe('PlanList', () => {
  it('muestra el estado de carga', () => {
    usePlans.mockReturnValue({ loading: true, error: null, data: null });

    render(<PlanList />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('muestra mensaje de error', () => {
    usePlans.mockReturnValue({ loading: false, error: { message: 'Error al cargar' }, data: null });

    render(<PlanList />);
    expect(screen.getByText(/error: error al cargar/i)).toBeInTheDocument();
  });

  it('muestra los planes correctamente', () => {
    const mockData = {
      list: [
        { name: 'Plan Básico', price: 50 },
        { name: 'Plan Avanzado', price: 100 }
      ]
    };

    usePlans.mockReturnValue({ loading: false, error: null, data: mockData });

    render(<PlanList />);

    const planCards = screen.getAllByTestId('plan-card');
    expect(planCards).toHaveLength(2);
    expect(planCards[0]).toHaveTextContent('Plan Básico');
    expect(planCards[1]).toHaveTextContent('Plan Avanzado');
  });
});
