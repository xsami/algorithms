defmodule Solution do
  @spec license_key_formatting(s :: String.t, k :: integer) :: String.t
  def license_key_formatting(s, k) do
    list = s |> String.split("-")
    [h | t] = list
    h <> "-" <> (t |> Enum.join("") |> String.upcase |> String.split("", trim: true) |> Enum.chunk_every(k) |> Enum.map(fn(l) -> Enum.join(l, "") end) |> Enum.join("-"))
  end
end
